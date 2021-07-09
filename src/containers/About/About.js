import React from 'react'
import AboutCard from '../../components/AboutCard';
import Container from '../../components/Container';
import Title from '../../components/Title';
import "./About.css"

const data = [{
    title: "Investment Trading",
    subtitle: "the quick fox jumps over the lazy dog"
},
{
    title: "Raising Funds",
    subtitle: "the quick fox jumps over the lazy dog"
}, {
    title: "Financial Analysis",
    subtitle: "the quick fox jumps over the lazy dog"
}
    , {
    title: "Taxation Planning",
    subtitle: "the quick fox jumps over the lazy dog"
}
    , {
    title: "Save money and time",
    subtitle: "the quick fox jumps over the lazy dog"
}
    , {
    title: "Outsourced Consulting",
    subtitle: "the quick fox jumps over the lazy dog"
}]

class About extends React.Component {
    render() {
        return <section>
            <Container>
                <Title heading="Better Strategy With  Quality Business" subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " />
                <div className="row mt-5">
                    {data.map((value, index) => {
                        return <div className="col-md-6 col-lg-4 mb-4">
                            <AboutCard title={value.title} subtitle={value.subtitle} />
                        </div>
                    })}
                </div>
            </Container>
        </section>
    }

}

export default About;