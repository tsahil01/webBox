export default function Page({ params }: { params: { containerId: string } }) {
    return <div>My Post: {params.containerId}</div>
  }