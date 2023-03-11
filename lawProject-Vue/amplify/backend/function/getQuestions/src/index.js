

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const fs = require(`fs`)
    return await fs.readFile("./jsons/questions.json", "utf8",(err, questions)=>{
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
