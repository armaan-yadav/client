import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signIn, signUp } from '../../utils/helper';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { motion } from "framer-motion"
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Form = ({ showLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleFormSubmit = async (data) => {
        if (showLogin) {
            const res = await signIn(data.email, data.password)
            if (res.status == 200) {
                (() => toast.success(`Good to see you again ${res.data.displayName ? `, ${res.data.displayName}!` : 'bro!'}`, { autoClose: 1500 }))(); navigate("/home")
                navigate("/")
            } else {
                (() => toast.error("Invalid credentials broo!", { autoClose: 1500 }))();
            }
        }
        else {
            const res = await signUp(data.name, data.email, data.password)
            if (res.status == 200) {
                (() => toast.success(`Welcome to CodePencil ,${res.data.displayName}!`, { autoClose: 1500 }))();
                navigate("/")
            } else {
                (() => toast.error("Email already in use!", { autoClose: 1500 }))();
            }
        }
    };

    return (
        <>
            <form
                className="flex  flex-col gap-3"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {!showLogin &&
                    <div className="flex flex-col ">
                        Name
                        <input
                            {...register("name", {
                                required: { value: true, message: "Name is required" },

                            })}
                            type="text"
                            className="outline-none bg-secondary border-b-2 border-b-white px-2 py-1"
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">{errors.name.message}</p>
                        )}
                    </div>
                }

                <div className="flex flex-col ">
                    Email
                    <input
                        {...register("email", {
                            required: true,
                        })}
                        type="email"
                        className="outline-none bg-secondary border-b-2 border-b-white px-2 py-1"
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="flex flex-col relative">
                    Password
                    <input
                        {...register("password", {
                            required: !showLogin,
                            minLength: {
                                value: 4,
                                message: "Password must be 8 characters long",
                            },
                        })}
                        type={showPassword ? `text` : "password"}
                        className="outline-none bg-secondary border-b-2 border-b-white px-2 py-1"
                    />
                    <button className="absolute top-7 translate-y-1 right-1"
                        onClick={(e) => e.preventDefault()}
                    >
                        {!showPassword ? (
                            <IoEyeSharp onClick={() => setShowPassword(!showPassword)} />
                        ) : (
                            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                        )}
                    </button>
                    {errors.password && (
                        <p className="text-red-600 text-sm">{errors.password.message}</p>
                    )}
                </div>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="w-full bg-emerald-500 hover:bg-emerald-700 duration-200 py-2 rounded-md"
                >
                    {isSubmitting ? "Loading..." : `${showLogin ? "Login" : "Signup"}`}
                </motion.button>
            </form></>
    )
}

export default Form