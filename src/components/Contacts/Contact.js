import React from 'react'
import Form from './Form'
import Info from './Info'
import "./Contact.css"
export default function Contact() {
  return (
    <div>
            <div className='outer'>
            <Info className="info"></Info>
            <Form className="form"></Form>
            </div>
    </div>
  )
}
