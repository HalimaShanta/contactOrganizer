export default {
    async saveMessage(context, payload){
        const finalData = {
            id: new Date().getTime(),
            contactId: payload.id,
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            phone: payload.phone
        }
        await fetch(`https://contact-organizer-a2f2b-default-rtdb.firebaseio.com/${finalData.id}.json`,{
            method: 'PUT',
            body: JSON.stringify(finalData)
        })
        context.commit('addMessage',finalData);
    }
}