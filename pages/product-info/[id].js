
export default function Details({details}) {
    const detail = details[0]
  return (
    <div>
        <p>{detail.description}</p>
        <p>{detail.title}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const allPaths = data?.map(each => {
        return {
            params: {
                id: each.id.toString()
            }
        }
    })

    return {
      paths: allPaths,
      fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context?.params.id
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const details = data.filter(each => each.id == id)
    return {
        props: {details}
    }
}