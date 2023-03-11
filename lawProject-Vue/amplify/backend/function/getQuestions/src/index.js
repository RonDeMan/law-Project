

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const fs = require(`fs`)

    let questions

    await fs.readFile("../../jsons/questions.json", "utf8",(err, questionsJson)=>{
        console.log(err)
        console.log(questions)
        questions= questionsJson
    })
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
    
};
