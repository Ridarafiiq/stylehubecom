import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and <br></br> Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>  
          </div>

          <div className="services-3">
            <div>
            <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            
            </div>
          </div>

          <div className="services-4">
            <div>
            <RiSecurePaymentLine className="icon" />
              <h3>Super Secure <br></br>Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 9rem 0;

.grid {
  display: flex;
  flex-wrap: wrap; /* Allow grid items to wrap to the next row */
  gap: 4.8rem;
  justify-content: space-between; /* Add space between services */
}

.services-1,
.services-2,
.services-3,
.services-4 {
  flex: 1; /* Each service takes equal width to fill the container */
  max-width: calc(25% - 1rem); /* Set a maximum width for each service with spacing */
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}


h3 {
  margin-top: 1.4rem;
  font-size: 2rem;
}

.icon {
  width: 8rem;
  height: 8rem;
  padding: 2rem;
  border-radius: 50%;
  background-color: #fff;
  color: #5138ee;
}`;

export default Services;
