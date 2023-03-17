

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    const { Storage } = require('@aws-amplify/storage');

    console.log(`EVENT: ${JSON.stringify(event)}`);
    const fs = require(`fs`)

    let questions
    
    return Storage.get("private/questions.json").then(questionsjson=>{
        question = questionsjson
        console.log(questions)
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify(questions),
    };
    })

    
    
};
