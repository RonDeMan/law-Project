

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    const questions = {
        "pages": [
            {
                "id" : "impressionOfAppointerPage",
                "title": "התרשמות מצב הממנה",
                "questionRows":[
                    {
                        "id":"1",
                        "header":"קיצד הגעת לפגישה",
                        "questions":[
                        {
                            "id":"arrivalWay",
                            "label":"תהליך הירושה",
                            "type":"v-radio-group",
                            "itemsId": "transportation",
                            "required": false,
                            "rules": []
                        },
                        {
                            "id":"otherTransportation",
                            "label":"דרך הגעה אחרת",
                            "type":"v-text-field",
                            "required": false,
                            "rules": [],
                            "enabledBy": ["arrivalWay"],
                            "enabledValue": ["5"]
                        }
                        ]
                    },
                    {
                        "id":"2",
                        "header":"האם הגעת עם מלווה?",
                        "questions":[
                        {
                            "id":"wasAccompanied",
                            "label":"היה מלווה",
                            "type":"v-checkbox",
                            "required": false,
                            "rules": []
                        },
                        {
                            "id":"relationToAccompanied",
                            "label":"מה הקשר בינך לבין המלווה",
                            "type":"v-text-field",
                            "required": false,
                            "rules": [],
                            "enabledBy": ["wasAccompanied"],
                            "enabledValue": [true]
                        }
                        ]
                    },
                    {
                        "id":"3",
                        "header":"מידע כללי",
                        "questions": [
                            {
                            "id":"age",
                            "label":"בן כמה אתה?",
                            "type":"v-text-field",
                            "required": false,
                            "rules": []
                            },
                            {
                            "id":"currentWork",
                            "label":"מה עיסוקך?",
                            "type":"v-text-field",
                            "required": false,
                            "rules": []
                            },
                            {
                            "id":"pastWork",
                            "label":"במה עסקת בעבר?",
                            "type":"v-text-field",
                            "required": false,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"row4",
                        "header":"האם ביקשת בעבר לערוך ייפוי כוח מתמשך?",
                        "questions": [
                            {
                            "id":"previouslyWanted",
                            "label":"האם ביקש בעבר?",
                            "type":"v-checkbox",
                            "required": false,
                            "rules": []
                            },
                            {
                            "id":"previouslyDeclined",
                            "label":"האם סורבת לעריכתו?",
                            "type":"v-checkbox",
                            "required": false,
                            "enabledBy": ["previouslyWanted"],
                            "enabledValue": [true],
                            "rules": []
                            },
                            {
                            "id":"declinedReason",
                            "label":"פרט",
                            "type":"v-text-field",
                            "required": false,
                            "enabledBy": ["previouslyWanted", "previouslyDeclined"],
                            "enabledValue": [true, true],
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"row5",
                        "header":"מי אחראי על ביצוע התשלומים השוטפים ועל הכלכלה בבית?",
                        "questions": [
                            {
                            "id":"currentPaymentPayer",
                            "label":"מי?",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"row6",
                        "header":"האם אתה נעזר במישהו לצורך מתלות הבית או מחוץ לבית?",
                        "questions": [
                            {
                            "id":"helper",
                            "label":"מי?",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"row7",
                        "header":"האם אתה פעיל בחוגים/התנדבויות/פעילויות חברתיות כלשהם?",
                        "questions": [
                            {
                            "id":"activities",
                            "label":"איזה?",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]
                    }
                ]
            },
            {
                "id" : "introductoryQuestionsPage",
                "title": "היכרות עם הממנה",
                "questionRows":[
                    {
                        "id":"row1",
                        "header":"מהו המצב המשפחתי שלך?",
                        "questions":[
                            {
                            "id":"appointerMaritalStatus",
                            "label":"מצב משפחתי",
                            "type":"v-select",
                            "itemsId": "maritalStatus",
                            "required": false,
                            "rules": []
                            }
                        ]   
                    },
                    {
                        "id":"row2",
                        "header":"מהו מספר הילדים שיש לך?",
                        "questions":[
                            {
                            "id":"numChildren",
                            "label":"מספר ילדים",
                            "type":"v-text-field",
                            "required": false,
                            "rules": []
                            },
                            {
                                "id":"comunicationWithChildren",
                                "label":"רמת הקשר",
                                "type":"v-radio-group",
                                "itemsId":"communication",
                                "required": false,
                                "rules": []
                            }
                        ]
                    },
                    {
                        "id":"row3",
                        "header":"קיצד הקשר/חוסר הקשר עם הילדים /בן הזוג בא לידי ביטוי בפועל?",
                        "questions":[
                            {
                            "id":"communicationReflected",
                            "label":"קיצד זה בא לידי ביטוי",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]   
                    },
                    {
                        "id":"row4",
                        "header":"היכן הילדים שלך גרים?",
                        "questions":[
                            {
                            "id":"childrenInIsrael",
                            "label":"בארץ",
                            "type":"v-checkbox",
                            "required": false,
                            "rules": []
                            },
                            {
                                "id":"communicationReflected",
                                "label":"איפה בחול?",
                                "type":"v-text-field",
                                "required": false,
                                "rules": [],
                                "enabledBy": ["childrenInIsrael"],
                                "enabledValue": [null]
                            }
                        ]   
                    },
                    {
                        "id":"row5",
                        "header":"מה טיב הקשר בין הילדים?(חשוב לדעת האם יש סנכרון בין הילדים או חשש למחלוקת בעתיד)",
                        "questions":[
                            {
                            "id":"childrenrelationship",
                            "label":"תאר את הקשר",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]   
                    },
                    {
                        "id":"row6",
                        "header":"האם יש עוד משהו שחשוב שאדע בקשר למשפחה שלך ולקשר שלך איתם או עם מישהו ספציפי מהם",
                        "questions":[
                            {
                            "id":"otherImportantFamilyInfo",
                            "label":"מידע חשוב על המשפחה",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]   
                    }
                ]
            },
            {
                "id" : "heWantPage",
                "title": "מי הוא רוצה למנות",
                "questionRows":[
                    {
                        "id":"1",
                        "header":"מי תרצה שיהיה מיופה הכוח שלך- מיהו האדם שתרצה שיפעל בהתאם להוראות, שיפורטו על ידך, ביפוי כוח?",
                        "questions":[
                            {
                                "id":"wantedPerson",
                                "label":"מיופה הכוח הרצוי",
                                "type":"v-select",
                                "itemsId":"people",
                                "required": false,
                                "rules": []
                            }
                        ]
                    },
                    {
                        "id":"2",
                        "header":"מה רמת הקשר שלך איתו/איתה?",
                        "questions":[
                            {
                            "id":"bondWithWanted",
                            "label":"רמת קשר",
                            "type":"v-radio-group",
                            "itemsId":"bonds",
                            "required": true,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"3",
                        "header":"עד כמה אתה סומך עליו/עליה?",
                        "questions": [
                            {
                            "id":"3",
                            "label":"תאר כמה",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"4",
                        "header":"האם מיפה הכוח מתגורר סמוך אליך?",
                        "questions": [
                            {
                            "id":"isWantedNear",
                            "label":"האם סמוך",
                            "type":"v-checkbox",
                            "required": false,
                            "rules": []
                            }
                        ]
                    },
                    {
                        "id":"5",
                        "header":"למה בחרת בו/בה?",
                        "questions": [
                            {
                            "id":"reasonWanted",
                            "label":"תאר למה",
                            "type":"v-textarea",
                            "required": false,
                            "rules": []
                            }
                        ]
                    }
                ]
            }
        ] 
    }

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
