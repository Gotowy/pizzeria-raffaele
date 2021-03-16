import {
  DeliveryContainer,
  TextAlignLeft,
} from "../styled-components/delivery";

const Delivery = () => {
  return (
    <DeliveryContainer>
      <TextAlignLeft>
        <h2>Akceptowane formy płatności:</h2>
        -Gotówka <br />
        -Karta <br />
        <br />
        <h2>Koszt dostawy:</h2>
        -Do 2km - 4zł <br />
        -Od 2km do 5km - 6zł <br />
        -Powyżej 5km (Łódź) - 8zł
        <br />
        -Poza Łodzią - prosimy pytać telefonicznie
        <br />
        <br />
      </TextAlignLeft>
    </DeliveryContainer>
  );
};

export default Delivery;
