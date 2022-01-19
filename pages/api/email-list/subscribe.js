const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

const listId = process.env.MAILCHIMP_LIST_ID;

const subscribeUser = async (req, res) => {
    const { userEmail } = req.body;
    console.log(`Email received by the server, in subscribe.js: ${userEmail}`);

    const response = await mailchimp.lists.addListMember(listId, {
        email_address: userEmail,
        status: "subscribed"
    });

    console.log(
        `Successfully added contact as an audience member. The contact's id is ${
        response.id
        }.`
    );
}

export default subscribeUser;