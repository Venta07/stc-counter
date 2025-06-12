// Direct recharges array
let directRecharges = [];

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileNav.classList.toggle('mobile-nav-open');
        mobileMenuOverlay.style.display = mobileNav.classList.contains('mobile-nav-open') ? 'block' : 'none';
        setTimeout(() => {
            mobileMenuOverlay.style.opacity = mobileNav.classList.contains('mobile-nav-open') ? '1' : '0';
        }, 10);
        
        // Toggle hamburger animation
        mobileMenuToggle.classList.toggle('active');
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        mobileNav.classList.remove('mobile-nav-open');
        mobileMenuOverlay.style.opacity = '0';
        mobileMenuToggle.classList.remove('active');
        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
        }, 300);
    }
    
    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Handle mobile nav link clicks
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const mobileTabName = this.getAttribute('data-tab');
            if (!mobileTabName) return;

            let targetTabId;

            // Map mobile nav data-tab to the main tab content ID
            if (mobileTabName === 'sawa') {
                targetTabId = 'sawa-tab';
            } else if (mobileTabName === 'jawwy') {
                targetTabId = 'jawy-tab';
            } else if (mobileTabName === 'data') {
                targetTabId = 'data-tab';
            } else if (mobileTabName === 'visits') {
                targetTabId = 'visitor-tab';
            } else if (mobileTabName === 'sim-transfer') {
                targetTabId = 'sawa-tab'; // Switch to Sawa tab first
            } else {
                return; // Unknown tab
            }

            // Deactivate all tabs and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Activate the selected tab and content
            const tabButton = document.querySelector(`.tab-button[data-tab='${targetTabId}']`);
            const tabContent = document.getElementById(targetTabId);

            if (tabButton) {
                tabButton.classList.add('active');
            }
            if (tabContent) {
                tabContent.classList.add('active');
            }

            // Special handling for sim-transfer: scroll into view
            if (mobileTabName === 'sim-transfer') {
                const simTransferSection = document.querySelector('.sim-transfer');
                if (simTransferSection) {
                    setTimeout(() => {
                        simTransferSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 50);
                }
            }

            // Close mobile menu
            closeMobileMenu();
        });
    });
    
    // Update active link when switching tabs
    function updateActiveNavLink(tabId) {
        mobileNavLinks.forEach(link => {
            if (link.getAttribute('data-tab') === tabId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    function switchTab(tabId) {
        // Deactivate all tabs and content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Activate the selected tab and content
        const tabButton = document.querySelector(`.tab-button[data-tab='${tabId}']`);
        const tabContent = document.getElementById(tabId);

        if (tabButton) {
            tabButton.classList.add('active');
        }
        if (tabContent) {
            tabContent.classList.add('active');
        }
        updateActiveNavLink(tabId);
    }
}

// Package data
const packages = {
    sawa: [
        { id: 'sawaBasic', name: 'سوا بيسك' },
        { id: 'sawaLike', name: 'سوا لايك' },
        { id: 'sawaLikePlus', name: 'سوا لايك بلس' },
        { id: 'sawaShare', name: 'سوا شير' },
        { id: 'sawaSharePlus', name: 'سوا شير بلس' },
        { id: 'sawaPost', name: 'سوا بوست' },
        { id: 'sawaPostPlus', name: 'سوا بوست بلس' },
        { id: 'sawaStar', name: 'سوا ستار' },
        { id: 'sawaStarPlus', name: 'سوا ستار بلس' },
        { id: 'sawaCaptain', name: 'سوا كابتن' },
        { id: 'sawaHero', name: 'سوا هيرو' },
        { id: 'sawaFlex40', name: 'سوا فليكس بيسك 40' },
        { id: 'sawaFlex65', name: 'سوا فليكس 65' },
        { id: 'sawaFlex100', name: 'سوا فليكس 100' },
        { id: 'sawaFlex150', name: 'سوا فليكس 150' },
        { id: 'sawaFlex240', name: 'سوا فليكس 240' },
        { id: 'sawaFlex340', name: 'سوا فليكس 340' }
    ],
    jawy: [
        { id: 'jawy30', name: 'جوي 30 اكسترا' },
        { id: 'jawy80', name: 'جوي 80 ستار' },
        { id: 'jawy110', name: 'جوي ستار 110' },
        { id: 'jawy160', name: 'جوي ستار 160' },
        { id: 'jawy75', name: 'جوي 75' },
        { id: 'jawy105', name: 'جوي 105' },
        { id: 'jawy200', name: 'جوي 200' },
        { id: 'jawy150', name: 'جوي 150' },
        { id: 'jawy60', name: 'جوي 60' },
        { id: 'jawy70', name: 'جوي 70' },
        { id: 'jawy100', name: 'جوي 100' }
    ],
    data: [
        { id: 'data70GB', name: '70 جيجابايت - شهر', data: '70' },
        { id: 'data120GB', name: '120 جيجابايت - شهر', data: '120' },
        { id: 'data250GB', name: '250 جيجابايت - 3 شهور', data: '250' },
        { id: 'data350GB', name: '350 جيجابايت - 3 شهور', data: '350' },
        { id: 'data300GB', name: '300 جيجابايت - 4 شهور', data: '300' },
        { id: 'data400GB', name: '400 جيجابايت - 4 شهور', data: '400' },
        { id: 'data600GB', name: '600 جيجابايت - 6 شهور', data: '600' },
        { id: 'unlimited1M', name: 'غير محدود - شهر', data: '∞' },
        { id: 'unlimited3M', name: 'غير محدود - 3 شهور', data: '∞' },
        { id: 'dashcam20GB', name: '20 جيجابايت - 6 شهور', data: '20' },
        { id: 'dashcam30GB', name: '30 جيجابايت - 12 شهر', data: '30' }
    ],
    visitor: []
};

// Initialize counters
let counters = {};

// Add a direct recharge
function addDirectRecharge() {
    const amountInput = document.getElementById('directRechargeAmount');
    const qtyInput = document.getElementById('directRechargeQty');
    const amount = parseInt(amountInput.value);
    const quantity = parseInt(qtyInput.value) || 1;
    
    if (isNaN(amount) || amount <= 0) {
        alert('الرجاء إدخال مبلغ صحيح');
        return;
    }
    
    // Add to direct recharges array
    directRecharges.push({
        id: 'recharge_' + Date.now(),
        amount: amount,
        quantity: quantity
    });
    
    // Update UI
    renderDirectRechargesList();
    
    // Reset inputs
    amountInput.value = '';
    qtyInput.value = '1';
    
    // Update report
    updateReport();
}

// Remove a direct recharge
function removeDirectRecharge(id) {
    directRecharges = directRecharges.filter(r => r.id !== id);
    renderDirectRechargesList();
    updateReport();
}

// App Initialization
window.onload = function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Set default date
    document.getElementById('saleDate').value = new Date().toISOString().split('T')[0];
    
    // Initialize all package counters
    Object.values(packages).flat().forEach(pkg => {
        counters[pkg.id] = 0;
    });
    
    // Initialize SIM transfers counter
    counters.simTransfers = 0;
    
    // Render all package lists
    renderPackageList('sawa-packages', packages.sawa);
    renderPackageList('jawy-packages', packages.jawy);
    renderPackageList('data-packages', packages.data);
    renderPackageList('visitor-packages', packages.visitor);

    // Setup UI event listeners
    setupTabs();
    setupDirectRechargeControls();
    
    // Set active tab on page load
    const defaultTab = document.querySelector('.tab-button');
    if (defaultTab) {
        defaultTab.click();
    }
};

function initializeCounters() {
    // Initialize package counters
    Object.values(packages).flat().forEach(pkg => {
        if (!counters.hasOwnProperty(pkg.id)) {
            counters[pkg.id] = 0;
        }
    });
    
    // Initialize SIM transfers counter if not exists
    if (!counters.hasOwnProperty('simTransfers')) {
        counters.simTransfers = 0;
    }
    
    // Clear direct recharges
    directRecharges = [];
    
    // Update all counter displays
    Object.keys(counters).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = counters[id];
        }
    });
    
    // Update direct recharges list
    renderDirectRechargesList();
}

function resetAll() {
    // Reset package counters
    Object.keys(counters).forEach(key => {
        counters[key] = 0;
    });
    
    // Reset UI
    document.querySelectorAll('.counter span').forEach(span => {
        span.textContent = '0';
    });
    
    // Clear direct recharges
    directRecharges = [];
    document.getElementById('directRechargesList').innerHTML = '';
    
    // Reset SIM transfers counter
    document.getElementById('simTransfers').textContent = '0';
    
    // Update report
    updateReport();
}

function setupDirectRechargeControls() {
    console.log('Direct recharge controls initialized');
}

function renderDirectRechargesList() {
    const list = document.getElementById('directRechargesList');
    list.innerHTML = '';
    
    directRecharges.forEach((recharge, index) => {
        const item = document.createElement('div');
        item.className = 'recharge-item';
        item.innerHTML = `
            <span>زيارة ${recharge.amount} ريال (${recharge.quantity})</span>
            <button onclick="removeDirectRecharge('${recharge.id}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        list.appendChild(item);
    });
}

function removeDirectRecharge(id) {
    directRecharges = directRecharges.filter(r => r.id !== id);
    renderDirectRechargesList();
}

// Set up tab switching functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Render package list
function renderPackageList(containerId, packageList) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    packageList.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package-item';

        if (pkg.isCustomAmount) {
            packageElement.innerHTML = `
                <div class="package-details">
                    <div class="package-name">${pkg.name}</div>
                    <div class="input-group">
                        <label for="${pkg.id}Amount">المبلغ:</label>
                        <input type="number" id="${pkg.id}Amount" value="${pkg.amount}" min="1">
                    </div>
                </div>
                <div class="counter">
                    <button onclick="updateCount('${pkg.id}', 1)" class="btn-plus"><span class="icon-plus"></span></button>
                    <span id="${pkg.id}">0</span>
                    <button onclick="updateCount('${pkg.id}', -1)" class="btn-minus"><span class="icon-minus"></span></button>
                </div>
            `;
        } else {
            packageElement.innerHTML = `
                <span>${pkg.name}</span>
                <div class="counter">
                    <button onclick="updateCount('${pkg.id}', 1)" class="btn-plus"><span class="icon-plus"></span></button>
                    <span id="${pkg.id}">0</span>
                    <button onclick="updateCount('${pkg.id}', -1)" class="btn-minus"><span class="icon-minus"></span></button>
                </div>
            `;
        }

        container.appendChild(packageElement);
    });
}

// Update counter value
function updateCount(id, change) {
    if (!counters.hasOwnProperty(id)) {
        counters[id] = 0;
    }
    counters[id] = Math.max(0, counters[id] + change);
    document.getElementById(id).textContent = counters[id];
    updateReport();
}

// Generate report
function generateReport() {
    try {
        const employeeName = document.getElementById('employeeName').value || 'غير محدد';
        const location = document.getElementById('location').value || 'غير محدد';
        const saleDateValue = document.getElementById('saleDate').value;

        // Create a date object from the input. If input is empty, use today.
        const date = saleDateValue ? new Date(saleDateValue) : new Date();
        
        // Adjust for timezone differences to prevent day-off errors
        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        const correctedDate = new Date(date.getTime() + userTimezoneOffset);

        const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        const dayName = days[correctedDate.getDay()];
        const formattedDate = `${correctedDate.getDate()}/${correctedDate.getMonth() + 1}/${correctedDate.getFullYear()}`;
        const fullDateString = `${dayName}، ${formattedDate}`;

        let report = `تقرير المبيعات\n`;
        report += `الموظف: ${employeeName}\n`;
        report += `الموقع: ${location}\n`;
        report += `التاريخ: ${fullDateString}\n`;
        report += '====================\n\n';

        let grandTotal = 0;
        let reportBody = '';

        // Function to safely parse numbers to ensure they are treated as numbers
        const parseCount = (value) => parseInt(value, 10) || 0;

        // Packages (Sawa, Jawwy, Data, Visitors)
        Object.entries(packages).forEach(([category, items]) => {
            let sectionContent = '';
            let sectionTotalCount = 0;
            const categoryName = getCategoryName(category);

            items.forEach(item => {
                const count = parseCount(counters[item.id]);
                if (count > 0) {
                    // For visitor packages with custom amounts, display the amount
                    if (item.isCustomAmount) {
                        const amountInput = document.getElementById(`${item.id}Amount`);
                        const amount = amountInput.value || item.amount;
                        sectionContent += `- ${item.name} ${amount} ريال: ${count}\n`;
                    } else {
                        sectionContent += `- ${item.name}: ${count}\n`;
                    }
                    sectionTotalCount += count;
                }
            });

            if (sectionContent) {
                reportBody += `${categoryName}:\n${sectionContent}\n`;
                grandTotal += sectionTotalCount;
            }
        });

        // Direct Recharges
        if (directRecharges.length > 0) {
            let sectionContent = '';
            let sectionTotalCount = 0;
            directRecharges.forEach(r => {
                const quantity = parseCount(r.quantity);
                sectionContent += `- شحن ${r.amount} ريال: ${quantity} مرة\n`;
                sectionTotalCount += quantity;
            });
            reportBody += `شحن مباشر:\n${sectionContent}\n`;
            grandTotal += sectionTotalCount;
        }

        // SIM Transfers
        const simTransfers = parseCount(counters.simTransfers);
        if (simTransfers > 0) {
            reportBody += `تحويل الشرائح:\n- عدد الشرائح المحولة: ${simTransfers}\n\n`;
            grandTotal += simTransfers;
        }

        if (!reportBody) {
            report += 'لا توجد مبيعات مسجلة.';
        } else {
            report += reportBody;
            report += '\n====================\n';
            report += `المجموع الكلي: ${grandTotal}`;
        }


        // عرض التقرير في المربع المخصص
        const reportOutput = document.getElementById('reportOutput');
        if (reportOutput) {
            reportOutput.value = report;
            // التمرير إلى أسفل الصفحة لعرض التقرير
            reportOutput.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('عنصر عرض التقرير غير موجود');
        }
    } catch (error) {
        console.error('حدث خطأ أثناء إنشاء التقرير:', error);
        alert('حدث خطأ أثناء إنشاء التقرير. الرجاء المحاولة مرة أخرى.');
    }

    document.getElementById('reportOutput').value = report;
}

function getCategoryName(key) {
    const names = {
        sawa: 'باقات سوا',
        jawy: 'باقات جوي',
        data: 'باقات البيانات',
        visitor: 'باقات سوا زيارة'
    };
    return names[key] || key;
}

// Copy report to clipboard
function copyToClipboard() {
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.select();
    document.execCommand('copy');
    
    // Show feedback message
    const copyButton = document.querySelector('.btn-copy');
    const originalText = copyButton.innerHTML;
    
    copyButton.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
    copyButton.style.background = 'linear-gradient(135deg, #4caf50, #43a047)';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        copyButton.innerHTML = originalText;
        copyButton.style.background = 'linear-gradient(135deg, #2196f3, #1976d2)';
    }, 2000);
}

// Reset all counters
function resetAll() {
    // Reset counters and data
    initializeCounters();
    // Clear the report
    document.getElementById('reportOutput').value = '';
}
