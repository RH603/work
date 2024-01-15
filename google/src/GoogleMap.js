import { Wrapper, Status } from "@googlemaps/react-wrapper";

const GoogleMap = () => {
    return (
      <Wrapper> 
        <iframe
          width="500px"
          height="500px"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCi36s8SAwoRdUQLvVgdvbGrzx84AcMNn4&q=에펠탑&zoom=12`}
        />
      </Wrapper>
    );
  };

  export default GoogleMap