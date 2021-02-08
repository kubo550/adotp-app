import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer";
import Nedb from "nedb"

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: 'We accept only POST method.' })
    }

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(406).json({ error: 'Email and name are required.' })
    }

    const sendMail = async (name: string, email: string) => {
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const textToSend = `Thank You! ${name}`;
        const htmlToSend = '<p> You Are Real <b> Hero </b> </p>';

        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: email,
            subject: `Hello ${name} ✔`,
            text: textToSend,
            html: htmlToSend,
        });

        const previewURL = nodemailer.getTestMessageUrl(info)
        // console.log("Message sent: %s", info.messageId);
        // console.log("Preview URL: %s", previewURL);

    }

    const saveUser = async (data) => {
        const database = new Nedb('db/users.db');
        database.loadDatabase();
        database.insert({ ...data, createdAt: Date.now() })
    }

    sendMail(name, email).catch(console.error)
    saveUser(req.body)

    res.json({
        status: true,
        message: "Data is uploaded",
    });

}