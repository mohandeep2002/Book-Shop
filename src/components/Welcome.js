import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import pic from "../pics/RRB.png";
import rbi from "../pics/rbi.png";
import guide from "../pics/guide.png";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Card className="bg-dark text-white App">
            <h1>K L Bank</h1>
            <Card.Body>Regional Rural Banks (RRBs)</Card.Body>
          </Card>
        </div>
        <div className="text-white">
          <Container>
            <span>
              <i>
                <h3>Regional Rural Banks (RRBs)</h3>
                <b>The Regional Rural Banks (RRBs)</b> were established in 1975
                under the provisions of the Ordinance promulgated on 26th
                September, 1975 and Regional Rural Banks Act, 1976 with a view
                to developing the rural economy by providing, for the purpose of
                development of agriculture, trade, commerce, industry and other
                productive activities in the rural areas, credit and other
                facilities, particularly to small and marginal farmers,
                agricultural labourers, artisans and small entrepreneurs, and
                for matters connected therewith and incidental thereto.
              </i>
            </span>
            <p>{"                 "}</p>
            <Row>
              <Col>
                <img src={pic} alt="Regional Rural Banks(RRBs)"></img>
              </Col>
              <Col>
                <i>
                  <b>The Regional Rural Banks (RRBs)</b> are government owned
                  scheduled commercial banks of India that operate at regional
                  level in different states of India. These banks are under the
                  ownership of Ministry of Finance , Government of India. They
                  were created to serve rural areas with basic banking and
                  financial services. However, RRBs also have urban branches.
                  <hr></hr>
                  The area of operation is limited to the area notified by the
                  government of India covering, and it covers one or more
                  districts in the State. RRBs perform various functions such as
                  providing banking facilities to rural and semi-urban areas,
                  carrying out government operations like disbursement of wages
                  of MGNREGA workers and distribution of pensions, providing
                  para-banking facilities like locker facilities, debit and
                  credit cards, mobile banking, internet banking, and UPI
                  services.
                  <br></br>
                  Regional Rural Banks were established under the provisions of
                  an ordinance passed on 26 September 1975 and the RRB Act 1976
                  to provide sufficient banking and credit facility for
                  agriculture and other rural sectors.
                </i>
              </Col>
            </Row>
            <br></br>
            <div className="App">
              <h3>
                <b>
                  <i>
                    Regional Rural Banks - Priority Sector Lending - Targets and
                    Classification
                  </i>
                </b>
              </h3>
            </div>
            <br></br>
            <Row>
              <Col>
                <i>
                  During the last decade, Regional Rural Banks (RRBs) have
                  undergone significant structural and operational changes, be
                  it two-phased amalgamation, implementation of CBS platform or
                  recapitalization, inter alia. Considering the growing
                  significance of RRBs in pursuit of financial inclusion agenda,
                  it has been decided to revise the priority sector guidelines
                  for RRBs. Accordingly, the comprehensive revised guidelines on
                  Priority Sector Lending – Targets and Classification for
                  Regional Rural Banks are enclosed as Annex. The revised
                  guidelines supersede all earlier guidelines mentioned in the
                  Master Circular RPCD.CO.RRB.BC 5/03.05.33/2014-15 dated July
                  1, 2014 on Regional Rural Banks - Lending to Priority Sector.
                </i>
              </Col>
              <Col xs={2}>
                <img src={rbi} width={150} alt="RBI"></img>
              </Col>
            </Row>
            <div>
              <i>
                <h5>
                  Some of the salient features of the guidelines are as under:-
                </h5>
              </i>
            </div>
            <Row>
              <Col>
                <i>
                  <ol>
                    <li>
                      Targets: 75 per cent of total outstanding to the sectors
                      eligible for classification as priority sector lending and
                      sub sector targets as indicated in subsequent paragraphs.
                    </li>
                    <li>
                      Categories of the Priority Sector: Medium Enterprises,
                      Social Infrastructure and Renewable Energy will form part
                      of the Priority Sector, in addition to the existing
                      categories, with a cap of 15 per cent of total
                      outstanding.
                    </li>
                    <li>
                      Agriculture: 18% per cent of total outstanding should be
                      advanced to activities mentioned under Agriculture.
                    </li>
                    <li>
                      Small and Marginal Farmers: A target of 8 percent of total
                      outstanding has been prescribed for Small and Marginal
                      Farmers within Agriculture.
                    </li>
                    <li>
                      Micro Enterprises: A target of 7.5 per cent of total
                      outstanding has been prescribed for Micro Enterprises.
                    </li>
                    <li>
                      Weaker Sectors: A target of 15 per cent of total
                      outstanding has been prescribed for Weaker Sections.
                    </li>
                    <li>
                      Monitoring: Priority Sector Lending will be monitored on a
                      quarterly as well as annual basis.
                    </li>
                  </ol>
                </i>
              </Col>
              <Col>
                <img src={guide} alt="guidelines"></img>
              </Col>
            </Row>
            <a href="https://rbidocs.rbi.org.in/rdocs/notification/PDFs/FAD6198020D71A4BCD9E04E4FAFEF1F494.PDF">
              PDF
            </a>
          </Container>
        </div>
      </div>
    );
  }
}
export default Welcome;
