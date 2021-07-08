import React from 'react'
import "./MainSection.css"
import Button from '../../components/Button';

class MainSection extends React.Component {
    render() {
        return (
            <section id="mainSection">
                <div className="container  text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <h1 >Creating a Beautifull & Usefull Solutitons</h1>
                            <p className="mt-5 mb-5">We know how large objects will act, but things on a
                                small scale just do not act that way.</p>
                            <div>
                                <Button text="Get Quote Now" className="me-3" active></Button>
                                <Button text="Learn More"></Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default MainSection;