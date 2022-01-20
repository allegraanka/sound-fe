const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

const listId = process.env.MAILCHIMP_LIST_ID;

export default async function subscribe(req, res) {
    const { email } = req.body;
    console.log(`Email received by the server, in subscribe.js: ${email}`);

    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed"
      });
      res.status(200).json({ response });
      console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    }
    catch (error) {
      console.log(`There was an error adding contact: ${email} to Mailchimp audience: ${error}`);
    }    
  }