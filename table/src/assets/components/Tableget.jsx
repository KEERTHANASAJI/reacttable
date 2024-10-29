
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tableget = () => {
  return (
    <div><br></br>
      <TableContainer>
      <Table border='1'>
        <TableHead>
          <TableRow>
            <TableCell id="de">Dessert (100g serving)
            </TableCell>
            <TableCell id="de">Image
            </TableCell>
            <TableCell id="de">Calories
            </TableCell>
            <TableCell id="de">Fat(g)
            </TableCell>
            <TableCell id="de">Protein(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Frozen yoghurt
            </TableCell>
            <TableCell>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsE5z1wRWf8MdedoaXUAMcuBMv_-uTlHSPQ&s' height={250}></img>
            </TableCell>
            <TableCell>159
            </TableCell>
            <TableCell>6
            </TableCell>
            <TableCell>4
            </TableCell>

          </TableRow>
          <TableRow>
            <TableCell>Ice cream sandwich
            </TableCell>
            <TableCell id='im'>
            <img src="https://i0.wp.com/www.thelittleblogofvegan.com/wp-content/uploads/2024/05/oreo-ice-cream-sandwich.jpg?fit=1365%2C2048&ssl=1" height={250}></img>
            </TableCell>
            <TableCell>159
            </TableCell>
            <TableCell>237
            </TableCell>
            <TableCell>9
            </TableCell>
           
          </TableRow>
          <TableRow>
            <TableCell>Eclair
            </TableCell>
            <TableCell>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60mlj0qdMate6573xiUg-FUkGeo21BXvbA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60mlj0qdMate6573xiUg-FUkGeo21BXvbA&s' height={200}></img>
            </TableCell>
            <TableCell>262
            </TableCell>
            <TableCell>16
            </TableCell>
            <TableCell>6
            </TableCell>

          </TableRow>
          <TableRow>
            <TableCell>Cupcake
            </TableCell>
            
            <TableCell><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-CPGedVqo3KTDTFmofc_-0_yfmX6ciNq5A&s" height={200} />
            </TableCell>
            <TableCell>305
            </TableCell>
            <TableCell>3.7
            </TableCell>
            <TableCell>4.3
            </TableCell>

          </TableRow>
          <TableRow>
            <TableCell>Gingerbread
            </TableCell>
            <TableCell><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmTxZNKS0sylffYyROM1aydgGt_cvxgU_6Q&s" height={200} />
            </TableCell>
            <TableCell>356
            </TableCell>
            <TableCell>16
            </TableCell>
            <TableCell>3.9
            </TableCell>

          </TableRow>

        </TableBody>

      </Table>
      </TableContainer>
      
    </div>
  )
}

export default Tableget