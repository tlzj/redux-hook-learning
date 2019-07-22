function cardReducer(state, action) {
  console.log(state, 'state')
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      name: action.name, // 使用action携带的新name
      picture: state.picture  // 不需要修改，使用旧state的值
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function dialogReducer(state, action) {
  switch (action.type) {
    case 'SHOW_DIALOG':
    return {
      status: true
    }

    case 'CLOSE_DIALOG':
    return {
      status: false
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function reducer(state, action) {
  return {
    card: cardReducer(state.card, action),
    dialog: dialogReducer(state.dialog, action)
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//     return {
//       card: {
//         name: action.name, // 使用action携带的新name
//         picture: state.card.picture  // 不需要修改，使用旧state的值
//       },
//       dialog: state.dialog  // 不需要修改，使用旧state的值
//     }

//     case 'SHOW_DIALOG':
//     return {
//       card: state.card,  // 不需要修改，使用旧state的值
//       dialog: {
//         status: true
//       }
//     }

//     case 'CLOSE_DIALOG':
//     return {
//       card: state.card,  // 不需要修改，使用旧state的值
//       dialog: {
//         status: false
//       }
//     }

//     default:
//     return state  // 没有匹配的action type，返回原来的state
//   }
// }

export default reducer