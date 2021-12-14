/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'

export default async (req, res) => {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'E-mail necessário!' })
  }

  const SERVER_PREFIX = 'us20'
  const AUDIENCE_ID = '17cbe5a34e'
  const API_KEY = '080068aa28e84e8e2638dc3a18ed2222-us20'

  const url = 'https://us20.api.mailchimp.com/3.0/lists/17cbe5a34e/members'

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: 'sem nome'
    }
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `BEARER ${API_KEY}`
    }
  }

  try {
    const response = await axios.post(url, data, options)
    if (response.status >= 400) {
      return res.status(400).json({
        error: 'msg error'
      })
    }
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
