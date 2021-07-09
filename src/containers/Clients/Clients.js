import React from 'react'
import ClientCard from '../../components/ClientCard';
import Container from '../../components/Container';
import Title from '../../components/Title';
import "./Clients.css"

const data = [
    {
        img: "user1.png",
        name: "Regina Miles",
        job: "Designer",
        star: 4,
        desc: "This proved to be impossible using concepts of space and time.Einstein new view of time first and then"
    },
    {
        img: "user2.png",
        name: "Regina Rolls",
        job: "Designer",
        star: 2,
        desc: "This proved to be impossible using concepts of space and time.Einstein new view of time first and then"
    }
]

class Clients extends React.Component {
    render() {
        return <section>
            <Container>
                <Title heading="What Clients Say" subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " />
                <div className="row mt-5">
                    {data.map((value, index) => {
                        return <div className="col-lg-6  mb-4">
                            <ClientCard value={value} />
                        </div>
                    })}
                </div>
            </Container>
        </section>
    }

}

export default Clients;