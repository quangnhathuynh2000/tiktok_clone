
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const user = req.body;
        client.createIfNotExists(user)
            .then(() => res.status(200).json('login sucess'))

        // } else if (req.method === 'POST') {
        //     const doc = req.body;

        //     client.create(doc).then(() => {
        //         res.status(200).json('video created');
        //     });
    }
}