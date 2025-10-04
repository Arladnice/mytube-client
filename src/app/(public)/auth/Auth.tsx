'use client'

import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

interface IAuthForm {
  email: string
  password: string
}

export function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    if (isLogin) {
    }
  }

  return (
    <div className='max-w-md mx-auto mt-8'>
      <div className='flex justify-center mb-6'></div>
    </div>
  )
}
