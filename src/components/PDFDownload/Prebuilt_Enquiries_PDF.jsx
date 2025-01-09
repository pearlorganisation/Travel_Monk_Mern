import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        backgroundColor: '#E4E4E4',
    },
    section: {
        marginBottom: 10,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    activityList: {
        marginLeft: 15,
        fontSize: 12,
    },
});

const PrebuiltEnquiriesPdf = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* General Enquiry Details */}
            <View style={styles.section}>
                <Text style={styles.header}>Enquiry Details</Text>
                <Text style={styles.text}>Name: {data.name}</Text>
                <Text style={styles.text}>Email: {data.email}</Text>
                <Text style={styles.text}>Mobile Number: {data.mobileNumber}</Text>
                <Text style={styles.text}>Package: {data.package.name}</Text>
                <Text style={styles.text}>Vehicle: {data.selectedVehicle.name}</Text>
                <Text style={styles.text}>Number of Travellers: {data.numberOfTravellers}</Text>
                <Text style={styles.text}>Estimated Price: ₹{data.estimatedPrice.toLocaleString()}</Text>
                <Text style={styles.text}>Message: {data.message}</Text>
                <Text style={styles.text}>
                    Enquiry Created At: {new Date(data.createdAt).toLocaleString()}
                </Text>
            </View>

            {/* Itinerary Details */}
            <View style={styles.section}>
                <Text style={styles.header}>Itinerary</Text>
                {data.itinerary.map((day, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.text}>Day {day.day}: {day.location}</Text>
                        <Text style={styles.text}>Hotel: {day.selectedHotel.name}</Text>
                        {day.selectedActivities.length > 0 ? (
                            <Text style={styles.text}>Activities:</Text>
                        ) : (
                            <Text style={styles.text}>Activities: None</Text>
                        )}
                        {day.selectedActivities.map((activity, idx) => (
                            <Text key={idx} style={styles.activityList}>
                                - {activity.label}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

const DownloadPrebuiltPdfButton = ({ data }) => (
    <PDFDownloadLink
        document={<PrebuiltEnquiriesPdf data={data} />}
        fileName={`EnquiryDetails-${data.name}.pdf`}
    >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
);

export default DownloadPrebuiltPdfButton;
