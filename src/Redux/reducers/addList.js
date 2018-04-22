const initialState = [
]


const addList = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_LIST':
         return [
            ...state,
            {
               id: action.id,
               title: action.title,
               isOpen: action.isOpen,
               comment: action.comment
            }
         ]
         
      case 'IS_OPEN':
         return state.map(item =>
               (item.id === action.check) ? 
               { ...item, isOpen: true } : 
               { ...item, isOpen: false }
            )
            
      case 'RM_LIST_ITEM':
         return state.filter(el => el.id !== action.delId)

      case 'ADD_POST':
         return state.map(item => {
            if(item.isOpen){
               return Object.assign({}, item, {
                  comment: [
                     ...item.comment,
                     {
                        id: action.comment.id,
                        img:  action.comment.img,
                        text: action.comment.text
                     }
                  ]
               })

            }
            return item
         })
         
         
         
         
        
      default:
         return state
   }
}

export default addList
