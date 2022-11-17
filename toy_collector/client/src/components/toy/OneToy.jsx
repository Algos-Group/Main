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
    <div className="mainBody">
      {(user._id) ?
        <>
          <div className="displayForm">
            <Link className="buttons" to="/allToys">All Toys</Link>
            <div className="d-flex justify-content-center m-5">
              <div className="text-start">
                <h2 className="display-5">{name}</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg> Price: ${price}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg> Category: {category}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg> Description: {description}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg> Reserved? {reservedBy ? <span className="text-danger">Yes.</span> : <span className="text-success">Nope!</span>}</p>
              </div>
              <img className="w-50" src={image} alt='No Image Found.'/>
            </div>
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