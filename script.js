document.addEventListener('DOMContentLoaded', function () {
    const rfqForm = document.getElementById('rfq-form');
    const trackRfqForm = document.getElementById('track-rfq-form');
    const vendorTable = document.getElementById('vendor-table').getElementsByTagName('tbody')[0];

    let rfqDatabase = []; // This will simulate the RFQ database

    rfqForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('rfq-title').value;
        const description = document.getElementById('rfq-description').value;
        const deadline = document.getElementById('rfq-deadline').value;

        const rfqId = 'RFQ-' + Math.floor(Math.random() * 10000);
        rfqDatabase.push({
            rfqId,
            title,
            description,
            deadline,
            status: 'Pending'
        });

        alert(`RFQ created successfully! RFQ ID: ${rfqId}`);
        rfqForm.reset();
    });

    trackRfqForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const rfqId = document.getElementById('rfq-id').value;
        const rfq = rfqDatabase.find(rfq => rfq.rfqId === rfqId);

        const statusDiv = document.getElementById('rfq-status');

        if (rfq) {
            statusDiv.innerHTML = `<strong>Status:</strong> ${rfq.status}<br><strong>Deadline:</strong> ${rfq.deadline}`;
        } else {
            statusDiv.innerHTML = 'RFQ not found!';
        }
    });

    function addVendorResponse(vendorName, responseDate) {
        const newRow = vendorTable.insertRow();
        newRow.insertCell(0).textContent = vendorName;
        newRow.insertCell(1).textContent = responseDate;
        newRow.insertCell(2).textContent = 'Awaiting Review'; // Default status
    }

    // Example: Add a vendor response for demonstration purposes
    addVendorResponse('Vendor A', '2025-01-15');
    addVendorResponse('Vendor B', '2025-01-17');
});
