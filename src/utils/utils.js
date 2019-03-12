import ngrok from 'ngrok'
// import { getStore } from '../App'

ngrok.connect(5000, function(err, url) {
  console.log(err, url)
}) // https://757c1652.ngrok.io -> http://localhost:5000

const ngrokLocalhost = 'http://a63e1c9e.ngrok.io'
const isOffline = true

/*
   EXAMPLE USE:

  callGetOrders = async () => {
    this.setState({
      orders: await callGet('orders'),
    })
  }
*/

export async function callGet(route) {
  if (isOffline) {
    return {
      status: 200,
      data: [],
    }
  } else {
    const response = await fetch(ngrokLocalhost + route)
    const { status } = response

    return {
      status,
      data: await response.json(),
    }
  }
}

/*
   EXAMPLE USE:

    let route = '/upload_customer'
    let body = {
      cust_customer_id,
      cust_customer_name
    }

    const status = await callPost(route, body)
    if (status === 200) {
      this.setState({
        cust_customer_id: '',
        cust_customer_name: '',
      })
      this.callGetCustomers()
    } else {
      alert('Error, check console')
    }
*/

export async function callPost(route, body) {
  if (isOffline) {
    return {
      status: 200,
      data: [],
    }
  } else {
    const response = await fetch(ngrokLocalhost + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    const { status } = response

    return {
      status,
      data: await response.json(),
    }
  }
}
