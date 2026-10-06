import hre from "hardhat";

async function main() {
    const connection = await hre.network.connect();

    console.log("Deploying DFX to Sepolia...");

    const contract = await connection.viem.deployContract("DFX");

    console.log("DFX deployed successfully!");
    console.log("Contract address:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});