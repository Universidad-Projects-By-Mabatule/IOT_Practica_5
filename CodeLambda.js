const Alexa = require('ask-sdk-core');
const AWS = require('aws-sdk');
const IoTData = new AWS.IotData({endpoint: 'a2ozm6491st8c4-ats.iot.us-east-2.amazonaws.com'});



const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola, Bienvenido al Internet de las Cosas';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const AlarmOnParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "Alarm_on"}',
    qos: 0
};
const AlarmOffParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "Alarm_off"}',
    qos: 0
};
const Led_blue_onParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_blue_on"}',
    qos: 0
};
const Led_blue_offParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_blue_off"}',
    qos: 0
};
const Led_yellow_onParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_yellow_on"}',
    qos: 0
};
const Led_yellow_offParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_yellow_off"}',
    qos: 0
};
const Led_green_onParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_green_on"}',
    qos: 0
};
const Led_green_offParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "led_green_off"}',
    qos: 0
};
const All_leds_onParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "all_leds_on"}',
    qos: 0
};
const All_leds_offParams = {
    topic: 'ucb/esp_in',
    payload: '{"action": "all_leds_off"}',
    qos: 0
};
const All_leds_offIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'all_leds_off';
    },
    handle(handlerInput) {
        IoTData.publish(All_leds_offParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Todos los leds apagados';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const All_leds_onIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'all_leds_on';
    },
    handle(handlerInput) {
        IoTData.publish(All_leds_onParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Todos los leds encendidos';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_green_offIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_green_off';
    },
    handle(handlerInput) {
        IoTData.publish(Led_green_offParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led verde apagado';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_green_onIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_green_on';
    },
    handle(handlerInput) {
        IoTData.publish(Led_green_onParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led verde encendido';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_yellow_offIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_yellow_off';
    },
    handle(handlerInput) {
        IoTData.publish(Led_yellow_offParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led amarillo apagado';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_yellow_onIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_yellow_on';
    },
    handle(handlerInput) {
        IoTData.publish(Led_yellow_onParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led amarillo encendido';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_blue_offIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_blue_off';
    },
    handle(handlerInput) {
        IoTData.publish(Led_blue_offParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led azul apagado';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const Led_blue_onIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'led_blue_on';
    },
    handle(handlerInput) {
        IoTData.publish(Led_blue_onParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Led azul encendido';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const AlarmaOnIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlarmON';
    },
    handle(handlerInput) {
        IoTData.publish(AlarmOnParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Alarma encendida';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const AlarmOffIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlarmOff';
    },
    handle(handlerInput) {
        IoTData.publish(AlarmOffParams, function(err, data) {
            if (err) {
                console.log(err);
            }
        });

        const speakOutput = 'Alarma apagada';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Tienes las opciones de encender y apagar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

/* *
 * FallbackIntent triggers when a customer says something that doesnâ€™t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Por favor intenta de nuevo';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
}; 

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
      
        
        Led_blue_offIntentHandler,
        Led_blue_onIntentHandler,

        Led_green_offIntentHandler,
        Led_green_onIntentHandler,

        Led_yellow_offIntentHandler,
        Led_yellow_onIntentHandler,

        AlarmaOnIntentHandler,
        AlarmOffIntentHandler,
        
        All_leds_onIntentHandler,
        All_leds_offIntentHandler,
 
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();