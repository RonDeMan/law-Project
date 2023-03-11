

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import questions from "./jsons/questions.json"
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    return await $.getJSON("./jsons/questions.json",json=>{
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
