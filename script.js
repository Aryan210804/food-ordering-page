 <script>
        let orderTotal = 0;
        const menu = {
            "pizza": 110,
            "burger": 70,
            "coffee": 60,
            "salad": 50,
            "pasta": 120,
            "sandwich": 80,
            "fries": 40,
            "tea": 30
        };
        function addToOrder(item) {
            orderTotal += menu[item];
            document.getElementById("total").textContent = `Total: Rs ${orderTotal}`;
            alert(`${item.charAt(0).toUpperCase() + item.slice(1)} added to your order!`);
        }
    </script>
