// import React, {useRef, useState} from 'react';
// import {useForm } from 'react-hook-form';

// // interface FormData {
// //         name: String;
// //         email:  String;
// //         password:  String;
// //         terms: Boolean;
// // }

// function RegisterForm() {

//     const { register, handleSubmit, errors } = useForm<FormData>({
//         defaultValues: {
//             name:'Lee',
//             email: 'lee@leemail.co',
//             password: 'Passworld1',
//             terms: true,
//         },
//     });
//     const [submitting,setSubmitting] = useState<Boolean>(false);


//     return (
//         <form onSubmit={handleSubmit(async(formData) =>{
            
//            setSubmitting(true)

//            console.log(formData, 'formData');

//            const response = await fetch('/api/')

//            setSubmitting(false);
//         })}>
//             <div>
//                 <label htmlFor='name'>Name</label>
//                 <input 
//                 type='text'
//                 name='name'
//                 id='name'
//                 ref ={register({requied: 'required'})}/>
//                 {error.name ? <div>{errors.name.message}</div> : null}
//             </div>
            
//             <div>
//                 <label htmlFor='email'>Email</label>
//                 <input 
//                 type='email' 
//                 name='email' 
//                 id='email' 
//                 ref ={register({requied: 'required'})}/>
//                 {error.email ? <div>{errors.name.message}</div> : null}
//             </div>
//             <div>
//                 <label htmlFor='password'>Password</label>
//                 <input 
//                 type='password' 
//                 name='password' 
//                 id='password' 
//                 ref ={register({requied: 'required',
//                 minLength: {
//                     value:8,
//                     mesage: 'must be 8 chars',
//                 },
//                 validate: (value) =>{
//                     return [
//                         /[a-z]/,
//                         /[A-Z]/,
//                         /[0-9]/,
//                         /[^a-zA-Z0-9]/
//                     ].every((pattern) => pattern.test(value) || 'moust include lower,upper,number, chars');
//                 },
//                 })}
//                 />
//                 {error.password ? <div>{errors.name.message}</div> : null}
//             </div>
//             <div>
//                 <label htmlFor='terms'>Agree with terms?</label>
//                 <input 
//                 type='checkbox' 
//                 name='terms' 
//                 id='terms' 
//                 ref ={register({requied: 'Must agree to terms.'})}/>
//                 {error.terms ? <div>{errors.name.message}</div> : null}
//             </div>
//             <div>
//                 <button type='submit' disabled={submitting}>Register</button>
//             </div>
//         </form>
//     )
// }

// export default RegisterForm
