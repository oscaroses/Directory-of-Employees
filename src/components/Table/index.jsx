import React from "react";

const useSortableData = (employees, config = null) => {
  const [sortData, setSortData] = React.useState(config);

  const sortEmps = React.useMemo(() => {
    let sortEmps = [...employees];
    if (sortData !== null) {
      sortEmps.sort((a, b) => {
        if (a[sortData.key] < b[sortData.key]) {
          return sortData.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortData.key] > b[sortData.key]) {
          return sortData.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortEmps;
  }, [employees, sortData]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortData &&
      sortData.key === key &&
      sortData.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortData({ key, direction });
  };

  return { employees: sortEmps, requestSort, sortData };
};

const Table = (props) => {
  const { employees, requestSort, sortData } = useSortableData(props.allemployees);
  const getClassNamesFor = (name) => {
    if (!sortData) {
      return;
    }
    return sortData.key === name ? sortData.direction : undefined;
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };  
  
    return (

        <div>
          <div>
            <input
              type="text"
              placeholder="Search By Name"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>

          <table className="striped responsive-table">

            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>
                  <button
                    id="myButton"
                    type="button"
                    onClick={() => requestSort('first')}
                    className={getClassNamesFor('first')}
                  >
                    Name
          </button>
                </th>
                <th>
                  <button
                    id="myButton"
                    type="button"
                    onClick={() => requestSort('email')}
                    className={getClassNamesFor('email')}
                  >
                    Email
          </button>
                </th>
                <th>
                  <button
                    id="myButton"
                    type="button"
                    onClick={() => requestSort('phone')}
                    className={getClassNamesFor('phone')}
                  >
                    Phone
          </button>
                </th>
              </tr>
            </thead>
            <tbody>

              {employees.filter((person => person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))).map(newperson =>(
                <tr key={newperson.id}>
                  <td><img src={newperson.picture} className="card-img-top" alt="..." /></td>
                  <td>{newperson.name}</td>
                  <td>{newperson.email}</td>
                  <td>{newperson.phone}</td>
                </tr>
              ))} 

            </tbody>
          </table>
        </div>
      )
};

export default Table;