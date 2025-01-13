import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
    section: {
        marginBottom: 15,
        padding: 10,
        border: '1px solid #ddd',
        borderRadius: 5,
    },
    header: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    activityList: {
        fontSize: 12,
        marginLeft: 10,
    },
});

const BookingsPdf = ({ data }) => {
    const content = (
        <View>
            <Text style={styles.header}>Booking Details</Text>
            <Text style={styles.text}>Booking ID: {data.bookingId}</Text>
            <Text style={styles.text}>User: {data.user.name} ({data.user.email})</Text>
            <Text style={styles.text}>
                Booking Status: {data.bookingStatus} | Payment Status: {data.paymentStatus}
            </Text>
            <Text style={styles.text}>Number of Travellers: {data.numberOfTravellers}</Text>
            <Text style={styles.text}>Total Price: ₹{data.totalPrice.toFixed(2)}</Text>
            <Text style={styles.text}>Created At: {new Date(data.createdAt).toLocaleString()}</Text>

            <Text style={styles.header}>Package Details</Text>
            <Text style={styles.text}>Package Name: {data.packageId.name}</Text>
            <Text style={styles.text}>
                Duration: {data.packageId.duration.days} Days / {data.packageId.duration.nights} Nights
            </Text>
            <Text style={styles.text}>
                Pick-Up: {data.packageId.pickDropPoint.pickup} | Drop: {data.packageId.pickDropPoint.drop}
            </Text>
            <Text style={styles.text}>
                Start Date: {new Date(data.packageId.startDate).toLocaleDateString()}
            </Text>
            <Text style={styles.text}>
                End Date: {new Date(data.packageId.endDate).toLocaleDateString()}
            </Text>

            <Text style={styles.header}>Itinerary</Text>
            {data.packageId.itinerary.map((day) => (
                <View key={day._id} style={styles.section}>
                    <Text style={styles.text}>Day {day.day}: {day.title}</Text>
                    <Text style={styles.text}>Location: {day.location}</Text>
                    <Text style={styles.text}>Description: {day.description}</Text>
                </View>
            ))}

            <Text style={styles.header}>Inclusions</Text>
            {data.packageId.inclusions.map((item, index) => (
                <Text key={index} style={styles.text}>- {item}</Text>
            ))}

            <Text style={styles.header}>Exclusions</Text>
            {data.packageId.exclusions.map((item, index) => (
                <Text key={index} style={styles.text}>- {item}</Text>
            ))}
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
