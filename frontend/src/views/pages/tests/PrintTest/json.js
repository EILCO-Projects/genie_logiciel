const testjson1 = {
    pages : [
        {
            numero : 1,
            elements : [

                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            numero : 2,
            elements : [

                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            numero : 3,
            elements : [

                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            numero : 2,
            elements : [

                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            numero : 1,
            elements : [
                {
                    type : "text", // text, audio, image, questions,
                    title : "Je suis la",
                    text : "However, if your form also includes custom button-like elements such as, these will only be given a style of pointer-events: none, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding tabindex=to prevent them from receiving focus and aria-disabled=disabled to signal their state to assistive technologies." 
                },
                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 5,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 6,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            numero : 2,
            elements : [
                {
                    type : "text", // text, audio, image, questions,
                    title : "Je suis la",
                    text : "However, if your form also includes custom button-like elements such as, these will only be given a style of pointer-events: none, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding tabindex=to prevent them from receiving focus and aria-disabled=disabled to signal their state to assistive technologies." 
                },
                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 5,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 6,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            numero : 2,
            elements : [
                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 5,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        {
                            numero : 6,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            numero : 2,
            elements : [
                {
                    type : "text", // text, audio, image, questions,
                    title : "Je suis la",
                    text : "However, if your form also includes custom button-like elements such as, these will only be given a style of pointer-events: none, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding tabindex=to prevent them from receiving focus and aria-disabled=disabled to signal their state to assistive technologies." 
                },
                {
                    type : "questions",
                    questions : [
                        {
                            numero : 4,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        },
                        
                        {
                            numero : 6,
                            question : "C'est quoi ce truc ?",
                            choices : [
                                "cool ce choix",
                                "cool ce choix",
                                "cool ce choix"
                            ]
                        }
                    ]
                }
            ]
        },
        
    ]
}

export const numerotation = (testjson)=>{
    let pnum=1;
    let qnum=1;
   
    testjson.pages.forEach((pg)=>{
        pg.numero = pnum; pnum++;
        pg.elements.forEach((e)=>{
            if(e.type==="questions"){
                e.questions.forEach((q)=>{
                    q.numero=qnum;qnum++;
                })
            }
        })


    })

    return testjson
}

export  const testjson = numerotation(testjson1)