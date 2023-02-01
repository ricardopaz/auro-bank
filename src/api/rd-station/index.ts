import axios from "axios"

export const getParams = (params?) => {
  return { token: process.env.RD_STATION_TOKEN, ...params }
}

export const getQueryParams = (params?) => {
  return new URLSearchParams(getParams(params)).toString()
}

export const getRdUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.RD_STATION_URL}/users?${getQueryParams()}`
    )

    return data.users.map(({ _id, name, email }) => { return { _id, name, email } })
  } catch (error) {
    throw new Error(error);
  }
}

export const getRdUser = async email => {
  try {
    const users = await getRdUsers()
    return users.find(user => user.email === email)._id
  } catch (error) {
    throw new Error(error);
  }
}

export const findLead = async name => {
  try {
    const { data } = await axios.get(
      `${process.env.RD_STATION_URL}/organizations?${getQueryParams({ q: name })}`, 
    ).catch(error => {
      return { status: error.response.status, data: null }
    })

    return data.organizations.find(org => org.name === name)
  } catch (error) {
    throw new Error(error);
  }
}
