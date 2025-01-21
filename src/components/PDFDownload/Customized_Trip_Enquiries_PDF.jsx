
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        backgroundColor: '#FAFAFA',
    },
    section: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 5,
    },
    subHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#555',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.4,
        color: '#444',
    },
    activityList: {
        marginLeft: 15,
        fontSize: 12,
        marginBottom: 3,
        color: '#555',
    },
});

const FullyCustomizedEnquiriesPdf = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>Enquiry Details</Text>
                <Text style={styles.text}>Name: {data.name}</Text>
                <Text style={styles.text}>Email: {data.email}</Text>
                <Text style={styles.text}>Mobile Number: {data.mobileNumber}</Text>
                <Text style={styles.text}>
                    Duration: {data.duration.days} days, {data.duration.nights} nights
                </Text>
                <Text style={styles.text}>
                    Estimated Price: ₹{data.estimatedPrice.toLocaleString()}
                </Text>
                <Text style={styles.text}>
                    Travel Dates: {new Date(data.startDate).toLocaleDateString()} -{' '}
                    {new Date(data.endDate).toLocaleDateString()}
                </Text>
                <Text style={styles.text}>Message: {data.message}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.header}>Itinerary</Text>
                {data.itinerary.map((day, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.subHeader}>
                            Day {day.day} ({new Date(day.date).toLocaleDateString()}):{' '}
                            {day.selectedLocation}
                        </Text>
                        <Text style={styles.text}>Hotel: {day.selectedHotel}</Text>
                        <Text style={styles.text}>Activities:</Text>
                        {day.selectedActivities.map((activity, idx) => (
                            <Text key={idx} style={styles.activityList}>
                                - {activity.label}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>
                    Enquiry Created At: {new Date(data.createdAt).toLocaleString()}
                </Text>
            </View>
        </Page>
    </Document>
);

const DownloadPdfButton = ({ data }) => (
    <PDFDownloadLink
        document={<FullyCustomizedEnquiriesPdf data={data} />}
        fileName="EnquiryDetails.pdf"
    >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
);

export default DownloadPdfButton;
