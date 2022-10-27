import { createOutgoingRequest, getIncomingRequests, getOutgoingRequests } from "../functions/bookingFunctions";

export default function Requests() {
  return (
    <div className="requests">
      <GetRequests />
    </div>
  )
}



function GetRequests() {
  createOutgoingRequest('ue3atxaT1pl34FfJciMNyrTfpsQ6', 'hi')
  // const outGoingRequests = getOutgoingRequests()
  // const inComingRequests = getIncomingRequests()
  // console.log(outGoingRequests)
  // console.log(inComingRequests)
  return(
    <div className="get-requests">
      <h1>outgoing requests</h1>
      {/* {outGoingRequests} */}
      <h1>incoming requests</h1>
      {/* {inComingRequests} */}
    </div>
  )
}

function Request(props) {
  const data = props.data;
  return (
    <div className="request">
      {data}
      <b>from: {data.from}</b>
      <b>to: {data.to}</b>
      <p>created {data.timeCreated}</p>
      <p>message: {data.messageToTutor}</p>
    </div>
  )
}