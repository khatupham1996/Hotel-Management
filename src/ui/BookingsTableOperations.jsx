import Filter from "./Filter";
import TableOperations from "./TableOperations";

function BookingsTableOperations() {
  return (
    <TableOperations>
      <Filter
        FilterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "checked out" },
          { value: "checked-in", label: "checked-in" },
          { value: "unconfirmed", label: "unconfirmed" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingsTableOperations;
