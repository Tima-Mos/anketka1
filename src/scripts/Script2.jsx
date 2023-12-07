import React, {useEffect, useState} from 'react';
import {getGenitiveCase} from "../Functions/GetGenetiveCase"
import {getDativeCase} from "../Functions/GetDativeCase"
const Script2 = ({parentName, yourName, subject, childName, childGender, updateResult}) => {

    useEffect(() => {
        textPush()
    }, [parentName, yourName, subject, childName, childGender]);

    const [additions, setAdditions] = useState([
        {checked: false, addition: "Также он" +gender(2)+ " очень внимател" +gender(3)+ " и старател" +gender(3)+ ".\n"},
        {checked: false, addition: "Также он" +gender(2)+ " очень внимател" +gender(3)+ " и старател" +gender(3)+ ".\n"},
    ])
    function textPush(){
        updateResult("Добрый день, " + parentName + "!\n" +
            "На связи " + yourName + ", я преподаватель subject школы RTS.\n" +
            "Хочу поделиться успехами " +getGenitiveCase(childName)+ " на уроках.\n" +
            "Мы провели 4 урока и " + childName + " научил" +gender(1)+ " _________.\n" +
            "\n" +
            "У " +getGenitiveCase(childName)+ " хорошо получается _________.\n" +
            "Также он" +gender(2)+ " очень внимател" +gender(3)+ " и старател" +gender(3)+ ".\n" +
            "Также он" +gender(2)+ " очень творчески подходит к заданиям и не боится экспериментировать.\n" +
            "Также он" +gender(2)+ " отлично работает самостоятельно.\n" +
            "Есть несколько моментов, на которые " +getDativeCase(childName)+ " нужно обратить больше внимания:\n" +
            "тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания.\n" +
            childName+ " испытывает сложности с изучением некоторых тем. Рекомендую ______.\n" +
            "домашнее задание: " +childName+ " не всегда выполняет его, а без закрепления материала он может очень быстро забываться.\n" +
            childName+ " иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.\n" +
            childName+ " всегда актив" +gender(4)+ " на уроках,чувствуется, что " +gender(5)+ " нравится заниматься.\n" +
            "На следующих занятиях мы хотим сделать упор на _________.\n" +
            "Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?")


    }

    function gender(numb){
        switch (numb){
            case 1:
                return childGender === "Мальчик" ? "ся" : "ась"
            case 2:
                return childGender === "Мальчик" ? "" : "а"
            case 3:
                return childGender === "Мальчик" ? "ен" : "ьна"
            case 4:
                return childGender === "Мальчик" ? "ен" : "на"
            case 5:
                return childGender === "Мальчик" ? "ему" : "ей"
        }
    }


    return (
        <div>
                Добрый день, {parentName}!
                <br/><br/>На связи {yourName}, я преподаватель subject школы RTS.
                <br/> Хочу поделиться успехами {getGenitiveCase(childName)} на уроках.
                <br/>Мы провели 4 урока и {childName} научил{childGender === "Мальчик" ? "ся" : "ась"} _________.

                У {getGenitiveCase(childName)} хорошо получается _________.
                <br/><br/><input type="checkbox" id="" name="" onChange={event => console.log(event.target.checked)}/>Также он{childGender === "Мальчик" ? "" : "а"} очень внимателен{childGender === "Мальчик" ? "" : "а"} и старателен{childGender === "Мальчик" ? "" : "а"}.
                <br/><input type="checkbox" id="" name=""/>Также он{childGender === "Мальчик" ? "" : "а"} очень творчески подходит к заданиям и не боится экспериментировать.
                <br/><input type="checkbox" id="" name=""/>Также он{childGender === "Мальчик" ? "" : "а"} отлично работает самостоятельно.
                <br/><br/><input type="checkbox" id="" name=""/>Есть несколько моментов, на которые {getDativeCase(childName)} нужно обратить больше внимания:
                <br/><input type="checkbox" id="" name=""/>	тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания.
                <br/><input type="checkbox" id="" name=""/> {childName} испытывает сложности с изучением некоторых тем. Рекомендую ______.
                <br/><input type="checkbox" id="" name=""/>	домашнее задание: {childName} не всегда выполняет его, а без закрепления материала он может очень быстро забываться.
                <br/><input type="checkbox" id="" name=""/> {childName} иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.
                <br/><br/>{childName} всегда активен{childGender === "Мальчик" ? "" : "а"} на уроках,чувствуется, что {childGender === "Мальчик" ? "ему" : "ей"} нравится заниматься.
                <br/>На следующих занятиях мы хотим сделать упор на _________.
                Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?
        </div>
    );
};

export default Script2;