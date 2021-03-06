import React from 'react';
import hallphoto from './hallphoto.webp'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import PaymentForm from './PaymentForm'
import Radio from '@material-ui/core/Radio';

const IndividualHall = ()=>{
    const [Form, setForm] = React.useState('');
    
    return(
        <div>
        <div>
           <Container>
               <ImageText>
                   <Image>
                       <img
                        src={hallphoto}
                        alt="no one"
                        width="500px"
                        height="500px"
                        />
                   </Image>
                   <Text>
                     <p>Ex quis laboris duis velit ad eu enim ex. Est qui occaecat aliqua magna ex eiusmod proident officia qui consectetur eiusmod reprehenderit dolore elit. Minim labore id do nostrud elit officia cillum pariatur.</p>
                   </Text>
               </ImageText>
               <Form>
                        <div>
                        <h1>user selected :{ Form}</h1>
                        <label>Book a hall </label>
                    <Radio
                        checked={Form === "book"}
                        onChange={(e)=>(setForm(e.target.value))}
                        value="book"
                    />
                    <label>Contact Hall owner </label>
                    <Radio
                        checked={Form === "contact"}
                        onChange={(e)=>(setForm(e.target.value))}
                        value="contact"
                    />
                    </div>
                    <div>
                        { 
                        Form=="contact" 
                        ? 
                        <ContactForm /> : 
                        <PaymentForm />
                        }
                    </div>
               </Form>
           </Container>
        </div>
    </div>
    )
}


export default IndividualHall

const Container = styled.div`
display:grid;
grid-template-columns:8% 50% 50% 20px;
grid-template-rows: 18% auto 100px;
`;

const ImageText = styled.div`
display:grid;
grid-column: 2 / 2;
grid-rows: 2 / 2;
width:300px;
height:200px;
`;

const Form = styled.div`
display:grid;
grid-column: 3 / 3;
grid-rows: 3 / 3;
padding-top:50px;
`;
const Image = styled.div`
padding:50px 20px 20px 20px;
`;
const Text = styled.div`
text-align:justify;
padding: 0px 10px 0px 10px;
`;