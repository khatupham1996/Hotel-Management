import BookingsTableOperations from "../ui/BookingsTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingsTableOperations>TEST</BookingsTableOperations>
    </Row>
  );
}

export default Bookings;
