import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteToyButton from "../DeleteToyButton";


const OneToy = ({ user }) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [hashtag, setHashtag] = useState("")
  const [submitter, setSubmitter] = useState("")
  const [reservedBy, setReservedBy] = useState("")
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Toy/${id}`, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        console.log("this is", res.data);
        setName(res.data.name)
        setPrice(res.data.price)
        setCategory(res.data.category)
        setDescription(res.data.description)
        setImage(res.data.image)
        setHashtag(res.data.hashtag)
        setSubmitter(res.data.submitter)
        setReservedBy(res.data.reservedBy)
      }).catch(err => console.log(err))
  }, [id])

  return (
    <div className="mainBody bg-light m-1">
      {(user._id) ?
        <>
          <div className="displayForm">
            {/* <Link className="buttons" to="/allToys">All Toys</Link> */}
            <Link className='d-flex m-2 justify-content-center' to={'/allToys'}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="" className="bi bi-arrow-left" viewBox="0 0 14 14">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></Link>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            {
              hashtag ? <p>#{hashtag}</p> : <></>
            }
            <p>Reserved? {reservedBy ? `:( Is Reserved` : 'Nope! Still available!'}</p>
            <img className="w-50" src={image} alt={name} />
            <br />
            {!reservedBy ?
              <>
                <Link className="buttons" to={`/reserve/${id}`}>Reserve this toy</Link>
              </>
              :
              <>
              </>
            }
            {(user._id === submitter) ?
              <>
                <Link className="buttons" to={`/editToy/${id}`}>Edit Toy</Link>
                <DeleteToyButton toyId={id} />
              </>
              : <>
              </>
            }
          </div>
        </>
        :
        <></>
      }
    </div>
  )
}

export default OneToy