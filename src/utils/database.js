import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native'
import moment from 'moment';

// export const createQuiz = (currentQuizId, title, description) => {
//     // Alert.alert(description)
//     return firestore().collection('Quizzes').doc(currentQuizId).set({
//         title,
//         description,
//         isPublish: false,
//         users: [],
//     });
// };

export const createUser = (email) => {
    return firestore().collection('Users').add({
        email: email,
        isAdmin: false,
    });
}

// Create new question for current quiz
// export const createQuestion = (currentQuizId, currentQuestionId, question) => {
//     Alert.alert(question.option.toString())
//     return firestore().
//         collection("Quizzes")
//         .doc(currentQuizId)
//         .collection('QNA')
//         .doc(currentQuestionId)
//         .set(question);
// }



/**
 * get all question from firebase
 */
export const getAllQuestions = async () => {
    // return firestore().collection('Questions').get();
    try {
        const q = await firestore().collection('Questions').get();
        let questions = []
        await q.docs.forEach(async element => {
            let temp =[]
            element.data().questions.forEach((x, index) => {
                temp.push(Object.assign({ id: `${index}` }, x));
            })
            // questions.push(Object.assign({ id: element.id }, element.data()));
            questions.push(temp)
        })

        // console.log(questions[1]);
        return questions
    } catch (error) {
        return error;
    }
}

/**
 * get all sessions from database
 */
export const getAllSessions = async (userId) => {
    try {
        let id = "";
        let answers = [];
        let date = new Date();
        const data = await firestore().collection('DonationData').get();
        
        await data.docs.forEach(async element => {
            if (userId == element.data().userId)
                id = element.id;
        })

        const temp = await firestore().collection('DonationData').doc(id).collection('Answers').get();

        await temp.docs.forEach(async element => {
            answers.push(element.data());
        })

        answers = answers.map((item) => {
            let date = moment(item.date._seconds * 1000)
            return { answer: item.answer, date: date.format('MMMM Do YYYY, h:mm:ss a')};
        })
        // console.log(answers);
        return answers
    } catch (error) {
        return error;
    }
}


// Get Quiz Details by id
export const getQuizById = currentQuizId => {
    return firestore().collection('Quizzes').doc(currentQuizId).get();
};

// Get Questions by currentQuizId
export const getQuestionsByQuizId = currentQuizId => {
    return firestore()
        .collection('Quizzes')
        .doc(currentQuizId)
        .collection('QNA')
        .get();
};

// Update quiz publishing state
export const PulishQuiz = (quizId, isPublish) => {
    return firestore().collection('Quizzes').doc(quizId).update({
        isPublish: isPublish,
    })
};

// Get User info by email
export const getUserInfoByEmail = async (email) => {

    try {
        let user = null
        const q = await firestore().collection("Users").get()

        await q.docs.forEach(async element => {
            if (email == element.data().email)
                user = { id: element.id, email: element.data().email, isAdmin: element.data().isAdmin, date: element.data().date }
        });

        return user;
    } catch (error) {
        console.log(error);
    }

}

//submit quiz
// export const submitQuiz = async ( quizId, userId, answers, userEmail ) => {
//     let quiz = null
//     let question = 1;

//     // user finish
//     await firestore().collection('Quizzes').doc(quizId).get().then(data => {
//         quiz = data.data();
//     });
//     quiz.users.push(userEmail)
//     firestore().collection('Quizzes').doc(quizId).update({
//         users: quiz.users
//     });


//     //update answer
//     for (let i = 0; i < answers.length; i++) {
//         await firestore().collection('Quizzes').doc(quizId).collection('QNA').doc(answers[i].questionId).get().then(data => {
//             question = data.data();
//         });

//         let res = question.answers;
//         res.push({ userId: userId, answer: answers[i].answer });

//         firestore().collection('Quizzes').doc(quizId).collection('QNA').doc(answers[i].questionId).update({
//             // answers: question.answers.push({userId: userId, answer: answers[i].answer})
//             answers: res
//         })
//     }
// }



//Check if user finished the quiz
// true finished, false unfinished
// export const checkQuizFinish = async (quizId, userEmail) => {
//     let finish = false;

//     await firestore().collection('Quizzes').doc(quizId).get().then(data => {
//         data.data().users.forEach(element => {
//             if (element == userEmail) {
//                 finish = true;
//             }
//         });
//     });

//     return finish;
// }