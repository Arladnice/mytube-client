import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='mx-auto w-1/2 mt-24 text-center'>
      <h1 className='font-bold text-9xl mb-5'>404</h1>
      <div className='text-xl'>Страница не найдена</div>
      <Link href='/' className='text-blue-500 hover:underline'>
        На главную
      </Link>
    </div>
  )
}
