export const currentExperienceReducer = (state = [], action) => {
    switch(action.type) {

        case 'GET_EXPERIENCE_ITEM':
            return action.experience;

        case 'LIKE_EXPERIENCE':
            return action.experience;

        default:
            return state;
    }
}