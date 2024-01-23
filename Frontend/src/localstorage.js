export const USER = 0
export const ORDER = 0
export let isModified = false
export let ADMIN = false

export const SetAdmin = (isAdmin) => {
  if (typeof isAdmin === 'boolean') {
    localStorage.setItem(ADMIN, JSON.stringify(isAdmin));
  } else {
    console.error('Invalid admin status. Setting to false.');
    localStorage.setItem(ADMIN, JSON.stringify(false));
  }
};

export const GetAdmin = () => {
  const adminStatus = localStorage.getItem(ADMIN);
  return adminStatus ? JSON.parse(adminStatus) : false;
};





export const SetOrder = order => {
  window.localStorage.setItem(ORDER,order)
}



export const SetModified = modif =>{
  window.localStorage.setItem(isModified,modif)
}
export const GetModified = () =>{
  let boolean_mod = window.localStorage.getItem(isModified)
  if (!!boolean_mod) return true
  return false
}
export const GetOrder = () =>{
  let order = window.localStorage.getItem(ORDER)
  if (!!order) return order
  return false
}

export const SetUser = user => {
    window.localStorage.setItem(USER,user)
}

export const GetUser = () =>{
    let user = window.localStorage.getItem(USER)
    if (!!user) return user
    return false
}
export const isLogin = () => {
    if (!!GetUser()) {
      return true
    }
    return false
  }

export const logout = () => {
    SetAdmin(false)
    window.localStorage.clear()
  }
