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
    listItem: {
        fontSize: 12,
        marginBottom: 3,
        marginLeft: 15,
        color: '#555',
    },
    terms: {
        marginTop: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
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
    // New styles for structured itinerary
    itineraryContainer: {
        marginBottom: 5,
    },
    dayHeader: {
        backgroundColor: '#EEF2F7',
        padding: 8,
        borderRadius: 3,
        marginBottom: 10,
    },
    dayTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    dayDate: {
        fontSize: 10,
        color: '#7F8C8D',
        marginTop: 2,
    },
    detailsRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    detailLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        width: '25%',
        color: '#555',
    },
    detailValue: {
        fontSize: 11,
        width: '75%',
        color: '#444',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ECEFF1',
        marginVertical: 8,
    },
    activityHeader: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        color: '#555',
    },
    activityItem: {
        fontSize: 10,
        marginLeft: 10,
        marginBottom: 3,
        color: '#444',
    },
    finalDayBox: {
        backgroundColor: '#F0F4F8',
        padding: 8,
        marginTop: 10,
        borderRadius: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#3498DB',
    },
    finalDayText: {
        fontSize: 12,
        color: '#2C3E50',
        fontWeight: 'bold',
    },
    enquiryDate: {
        fontSize: 11,
        color: '#666',
        fontStyle: 'italic',
        textAlign: 'right',
        marginTop: 5,
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
                    Estimated Price: {data.estimatedPrice.toLocaleString()}
                </Text>
                <Text style={styles.text}>
                    Travel Dates: {new Date(data.startDate).toLocaleDateString()} -{' '}
                    {new Date(data.endDate).toLocaleDateString()}
                </Text>
                <Text style={styles.text}>Message: {data.message}</Text>
                <Text style={styles.text}>
                    Vehicle: {data?.selectedVehicle?.vehicleName}
                </Text>
            </View>

            {/* Improved Itinerary Section */}
            <View style={styles.section}>
                <Text style={styles.header}>Itinerary</Text>

                {data.itinerary.map((day, index) => (
                    <View key={index} style={styles.itineraryContainer}>
                        {/* Day header with background */}
                        <View style={styles.dayHeader}>
                            <Text style={styles.dayTitle}>
                                Day {day.day}: {day.selectedLocation}
                            </Text>
                            <Text style={styles.dayDate}>
                                {new Date(day.date).toLocaleDateString()} mm/dd/yyyy
                            </Text>
                        </View>

                        {/* Hotel details */}
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Accommodation:</Text>
                            <Text style={styles.detailValue}>{day.selectedHotel.name}</Text>
                        </View>

                        <View style={styles.divider} />

                        {/* Activities section */}
                        <Text style={styles.activityHeader}>Activities:</Text>
                        {day.selectedActivities.length === 0 ? (
                            <Text style={styles.activityItem}>No activities scheduled for this day</Text>
                        ) : (
                            day.selectedActivities.map((activity, idx) => (
                                <Text key={idx} style={styles.activityItem}>• {activity.label}</Text>
                            ))
                        )}

                        {/* Add divider between days except for the last one */}
                        {index < data.itinerary.length - 1 && (
                            <View style={[styles.divider, { marginTop: 10, marginBottom: 15 }]} />
                        )}
                    </View>
                ))}

                {/* Final day with special styling */}
                <View style={styles.finalDayBox}>
                    <Text style={styles.finalDayText}>Last Day: Airport Drop</Text>
                </View>
            </View>

            {/* Inclusions Section */}
            <View style={styles.section}>
                <Text style={styles.header}>Inclusions</Text>
                {data.inclusions.length > 0 ? (
                    data.inclusions.map((item, index) => (
                        <Text key={index} style={styles.listItem}>• {item}</Text>
                    ))
                ) : (
                    <Text style={styles.text}>No inclusions specified.</Text>
                )}
            </View>

            {/* Exclusions Section */}
            <View style={styles.section}>
                <Text style={styles.header}>Exclusions</Text>
                {data.exclusions.length > 0 ? (
                    data.exclusions.map((item, index) => (
                        <Text key={index} style={styles.listItem}>• {item}</Text>
                    ))
                ) : (
                    <Text style={styles.text}>No exclusions specified.</Text>
                )}
            </View>

            {/* Enquiry Date Section - keeping this separate as in original */}
            <View style={styles.section}>
                <Text style={styles.text}>
                    Enquiry Created At: {new Date(data.createdAt).toLocaleString()}
                </Text>
            </View>

            {/* Payment Terms and Conditions */}
            <View style={styles.terms}>
                <Text style={styles.termsHeader}>Payment Terms and Conditions</Text>
                <Text style={styles.termsText}>• Pay only 5000 upfront for booking the package.</Text>
                <Text style={styles.termsText}>
                    • Pay the next 40% of the package price within 48 hours after our executive connects with you.
                </Text>
                <Text style={styles.termsText}>
                    • The remaining balance must be cleared as per the agreed payment schedule.
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