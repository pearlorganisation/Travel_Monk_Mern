import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 20,
        padding: 15,
        border: '1px solid #ddd',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#333',
        textDecoration: 'underline',
    },
    subHeader: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#555',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        color: '#444',
    },
    listItem: {
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 10,
    },
    terms: {
        marginTop: 30,
        padding: 15,
        border: '1px solid #ddd',
        borderRadius: 5,
        backgroundColor: '#f0f8ff',
    },
    termsHeader: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#003366',
    },
    termsText: {
        fontSize: 12,
        color: '#003366',
    },
});

const BookingsPdf = ({ data }) => {
    console.log("the data recieved is", data)
    const content = (
        <View>
            <Text style={styles.header}>Booking Details</Text>
            <View style={styles.section}>
                <Text style={styles.text}>Booking ID: {data?.bookingId}</Text>
                <Text style={styles.text}>User: {data?.user?.name} ({data?.user?.email})</Text>
                <Text style={styles.text}>
                    Booking Status: {data?.bookingStatus} | Payment Status: {data?.paymentStatus}
                </Text>
                <Text style={styles.text}>
                    Payment Status: {data?.paymentStatus}
                </Text>
                <Text style={styles.text}>Number of Travellers: {data?.numberOfTravellers}</Text>
                <Text style={styles.text}>Total Price: ₹{data?.totalPrice.toFixed(2)}</Text>
                <Text style={styles.text}>Advance Payment: ₹{data?.advancePayment}</Text>
                <Text style={styles.text}>Remaining Payment: ₹{data?.remainingPayment}</Text>
                <Text style={styles.text}>Advanced Payed At: {new Date(data?.createdAt).toLocaleString()}</Text>
            </View>

            <Text style={styles.header}>Package Details</Text>
            <View style={styles.section}>
                <Text style={styles.text}>Package Name: {data?.packageId?.name}</Text>
                <Text style={styles.text}>
                    Duration: {data?.packageId?.duration?.days} Days / {data?.packageId?.duration?.nights} Nights
                </Text>
                <Text style={styles.text}>
                    Pick-Up: {data?.packageId?.pickDropPoint?.pickup} | Drop: {data?.packageId?.pickDropPoint?.drop}
                </Text>
                {/* <Text style={styles.text}>
                    Start Date: {new Date(data?.packageId?.startDate).toLocaleDateString()}
                </Text>
                <Text style={styles.text}>
                    End Date: {new Date(data?.packageId?.endDate).toLocaleDateString()}
                </Text> */}
            </View>

            <Text style={styles.header}>Itinerary</Text>
            {data?.packageId?.itinerary?.map((day) => (
                <View key={day._id} style={styles.section}>
                    <Text style={styles.subHeader}>Day {day?.day}: {day?.title}</Text>
                    <Text style={styles.text}>Location: {day?.location}</Text>
                    <Text style={styles.text}>Description: {day?.description}</Text>
                    <Text style={styles.text}>Activities: {day?.activities?.map((newel,index)=>(
                        <Text>{index+1}. {newel?.name}</Text> 
                    ))}</Text>

                </View>
            ))}

            <Text style={styles.header}>Inclusions</Text>
            <View style={styles.section}>
                {data?.packageId?.inclusions?.map((item, index) => (
                    <Text key={index} style={styles.listItem}>- {item}</Text>
                ))}
            </View>

            <Text style={styles.header}>Exclusions</Text>
            <View style={styles.section}>
                {data?.packageId?.exclusions?.map((item, index) => (
                    <Text key={index} style={styles.listItem}>- {item}</Text>
                ))}
            </View>

            <View style={styles.terms}>
                <Text style={styles.termsHeader}>Payment Terms and Conditions</Text>
                <Text style={styles.termsText}>- Pay only ₹5000 upfront for booking the package.</Text>
                <Text style={styles.termsText}>
                    - Pay the next 40% of the package price within 48 hours after our executive connects with you.
                </Text>
                <Text style={styles.termsText}>
                    - The remaining balance must be cleared as per the agreed payment schedule.
                </Text>
            </View>
        </View>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {content}
            </Page>
        </Document>
    );
};

const PreviousBooking = ({ data }) => {
    return (
        <div>
            <button>
                <PDFDownloadLink
                    document={<BookingsPdf data={data} />}
                    fileName={`Booking_${data.bookingId}.pdf`}
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        backgroundColor: '#007BFF',
                        padding: '10px 20px',
                        borderRadius: '5px',
                    }}
                >
                    {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
                </PDFDownloadLink>
            </button>
        </div>
    );
};

export default PreviousBooking;
